import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogObservationsEndComponent } from './dialog-observations-end.component';

describe('DialogObservationsEndComponent', () => {
  let component: DialogObservationsEndComponent;
  let fixture: ComponentFixture<DialogObservationsEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogObservationsEndComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogObservationsEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
