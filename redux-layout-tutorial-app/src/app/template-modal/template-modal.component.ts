import {
  Component,
  ChangeDetectionStrategy,
  Output,
  ViewChild,
  EventEmitter,
  Input,
  ElementRef
} from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "template-modal",
  templateUrl: "template-modal.component.html"
})
export class TemplateModalComponent {
  private modalName: string = "templateFormModal";
  private modalRef: NgbModalRef;

  @ViewChild("content",{"static":false}) _templateModal: ElementRef;

  @Input()
  set modalState(_modalState: any) {
    if (_modalState == this.modalName) {
      this.openModal();
    } else if (this.modalRef) {
      this.closeModal();
    }
  }

  @Output() onCloseModal = new EventEmitter<any>();

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalRef = this.modalService.open(this._templateModal, {
      backdrop: "static",
      keyboard: false,
      size: "sm"
    });
  }

  closeModal() {
    this.modalRef.close();
  }
}

/**
 * The name of the currently-selected modal is coming from the container 
 * and is obtained through the modalState input of the component. 
 * If the name matches with the modalName (templateFormModal), 
 * then the modal is opened through the modalService. 
 * Conversely, onCloseModal is used to emit to the container 
 * that the user has clicked to close the modal.
 */