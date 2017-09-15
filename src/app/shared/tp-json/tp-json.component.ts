import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'tp-json',
  templateUrl: './tp-json.component.html',
  styleUrls: ['./tp-json.component.scss']
})
export class TpJSONComponent implements OnInit {

  @ViewChild('content') content: ElementRef;
  private dom: Document;

  constructor( @Inject(DOCUMENT) dom: Document) {
    this.dom = dom;
  }

  public ngOnInit() {

  }

  public copy(): void {
    const text: string = this.content.nativeElement.innerHTML;
    const elem = this.dom.createElement("textarea");
    elem.value = text;
    this.dom.body.appendChild(elem);
    elem.select()
    this.dom.execCommand('copy');
    elem.remove();
  }

}
