import { AfterViewInit, Directive, ElementRef, HostBinding, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appGenderColors]'
})

export class GenderColors implements AfterViewInit{
    @Input() heroGender: string = "";
    constructor(private elRef: ElementRef) { }

    ngAfterViewInit(): void {
	    this.elRef.nativeElement.style.color = this.setColor(this.heroGender);
    }

    setColor(heroGender:string):string{
        if(heroGender === 'female'){
            return 'red';
        }else if(heroGender === 'male'){
            return 'blue';
        }

        return 'black';
    }
}
    // @HostBinding('style.color') color : string = this.getColor(this.heroGender);

    // getColor(gender : string) : string {
    //     console.log(this.heroGender);
    //     if(gender === 'female'){
    //         return 'red';
    //     }else if(gender === 'male'){
    //         return 'blue';
    //     }
    //     return 'black';
    // }


//moze se i ovako unutar htmla sto je puno jednostavnije
//[ngStyle]="{color: hero.gender === 'female' ? 'red' : 'blue'}