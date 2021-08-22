import { Subscription } from "rxjs";

export class SubscriptionContainer {
    private subscriptions: Subscription[] = [];
    
    set add(s: Subscription){
        this.subscriptions.push(s);
    }

    dispose(){
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}