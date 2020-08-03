import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import {
  FileTransfer,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { ToastController } from "@ionic/angular";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { Storage } from "@ionic/storage";
import { resolve } from "url";

@Injectable({
  providedIn: "root",
})
export class Reportervice {
  url: string;

  fileTransfer: FileTransferObject;

  constructor(
    private http: HttpClient,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,
    private toastCtrl: ToastController,
    private storage: Storage,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}`;
  }

  getReport(id: string) {
    console.log("pdfService... " + id);
    this.fileTransfer = this.transfer.create();
    this.storage.get("token").then((token) => {
      this.fileTransfer
        .download(
          `${this.url}/report/formulation/${id}`,
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
    });
  }

  async toastSuccessDownload() {
    const toast = await this.toastCtrl.create({
      message: "Se decargo con exito",
      duration: 2000,
      color: "success",
    });
    toast.present();
  }
}
