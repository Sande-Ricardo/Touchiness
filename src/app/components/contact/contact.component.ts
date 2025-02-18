import { Component, Input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { UserData } from '../../interfaces/user-data';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  // imports: [    
    // CommonModule,
    // FormsModule,
    // BrowserAnimationsModule
  // ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  // animations:[
  //   trigger('fadeInOut', [
  //     // Cuando el div aparece
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('500ms ease-in', style({ opacity: 1 }))
  //     ]),
  //     // Cuando el div desaparece
  //     transition(':leave', [
  //       animate('500ms ease-out', style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class ContactComponent {
  @Input() userData!: UserData;

  newMessage: Contact = {
    name: '',
    email: '',
    message: '',
  };

  indicators: boolean = false;
  verificator: boolean = false;
  fade:string = ""

  constructor(private firestoreSv: FirestoreService) {}

  addMessage() {
    if (
      this.newMessage &&
      this.newMessage.name.length > 2 &&
      this.newMessage.email.slice(-4) == '.com' &&
      this.newMessage.message.length > 10
    ) {
      this.newMessage.date = new Date();
      console.log('Formato válido', this.newMessage);
      this.firestoreSv.addMessage(this.newMessage).then(() => {
        this.newMessage = {
          name: '',
          email: '',
          message: ''
        }

        this.fade = "fadeIn";
        setTimeout(
          () => {
            this.fade = "fadeOut";
          }, 2000
        )
      }).catch(
        (error) => {console.error(error);
        }
      );
    } else {
      console.log('Formato no válido', this.newMessage);
    }
  }

  openWindow(url: string) {
    window.open(url, '_blank');
  }
}
