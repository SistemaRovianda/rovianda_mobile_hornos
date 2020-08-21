
import { Inject, Injectable } from "@angular/core";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import {
  FileTransfer
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { ToastController } from "@ionic/angular";
import { API_ENDPOINT_PROVIDER } from "../../providers/tokens";
import { Storage } from "@ionic/storage";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class Reportervice {
  url: string;

  // fileTransfer: FileTransferObject;

  constructor(
    private fileOpener: FileOpener,
    private fileTransfer: FileTransfer,
    private file: File,
    private toastCtrl: ToastController,
    private storage: Storage,
    private authService: AuthService,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}`;
  }

  getReport(id: string) {
    console.log("pdfService... " + id);
    let fileTransfer = this.fileTransfer.create();
    this.storage.get("token").then((token) => {
      // this.storage.get("uid").then((uid) => {
        console.log("token report: ", token)
        console.log("uid: ", this.authService.getUID())
        fileTransfer
          .download(
            `${this.endpoint}/report/oven/${id}?uid=${this.authService.getUID()}`,
            this.file.dataDirectory + id + ".pdf",
            false,
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((entry) => {
            console.log("entry PDF: ", entry.toURL());
            this.fileOpener
              .open(entry.toURL(), "application/pdf")
              .then(() => {
                this.toastSuccessDownload();
                console.log("File is opened");
              })
              .catch((error) => console.log("Error opening file", error));
          });
      // })
      
    });
  }

  // getReport(id: string): Observable<any> {
  //   const transfer = this.fileTransfer.create();

  //   let token;
  //   let uid;

  //   this.storage.get('token').then((res) => (token = res));
  //   this.storage.get('uid').then((res) => uid = res)

  //   console.log("token: ", token, "uid: ", uid);

  //   return from(
  //     transfer
  //       .download(
  //         `${
  //           this.endpoint
  //         }/report/oven/${id}?uid=${uid}`,
  //         `${this.file.dataDirectory}report-${id}.pdf`,
  //         false,
  //         {
  //           headers: {
  //             Authorization: localStorage.getItem('token'),
  //           },
  //         }
  //       )
  //       .then((entry) => {
  //         let url = entry.toURL();
  //         this.fileOpener.open(url, 'application/pdf');
  //         return Promise.resolve(true);
  //       })
  //       .catch((error) => console.error('Error opening file ', error))
  //   ).pipe(map((res) => res));
  // }


  async toastSuccessDownload() {
    const toast = await this.toastCtrl.create({
      message: "Se decargo con exito",
      duration: 2000,
      color: "success",
    });

    return await toast.present();
  }
}
