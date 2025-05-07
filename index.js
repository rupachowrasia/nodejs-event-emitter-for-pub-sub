// Basic example
// import EventEmitter from 'node:events';

// const eventEmitter = new EventEmitter();

// eventEmitter.on('msg', () =>{ // eventEmitter.on() method is used to register listeners
//     console.log('An event occured!')
// });

// eventEmitter.emit('msg');  // eventEmitter.emit() method is used to trigger the event

// Class based approach
import { TicketManager } from './ticketManager.js';
import { DatabaseService } from './databaseService.js';
import { EmailService } from './emailService.js';

//import TicketManager from './ticketManager.js'; // default import
//export default TicketManager; // matches the default import
//import { TicketManager } from './ticketManager.js';   // named import
// export class TicketManager {}

const ticketManager = new TicketManager(3);
const databaseService = new DatabaseService();
const emailService = new EmailService();

ticketManager.on('buy', (email, price) => {
    databaseService.saveData(email, price);
    emailService.sendEmail(email);
});

ticketManager.on('error', (err) =>{
    console.error("No more ticket!!");
})

ticketManager.bookTicket('test@gmail.com', 10);
ticketManager.bookTicket('test@gmail.com', 20);
ticketManager.bookTicket('test@gmail.com', 30);
ticketManager.bookTicket('test@gmail.com', 40);