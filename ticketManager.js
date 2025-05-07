import EventEmitter from 'events';

export class TicketManager extends EventEmitter {
    constructor(supply) {
        super();
        this.supply = supply;
    }

    bookTicket(email, price) {
        if(this.supply > 0) {
            console.log(`Ticket booked for ${email} and price is ${price}`);
            this.emit('buy', email, price);
            this.supply = this.supply -1;
            return;
        }

        this.emit('error', new Error('No Ticket left to purchase!'));
        
    }
}
