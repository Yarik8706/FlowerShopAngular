import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface ImageData {
  src: string | ArrayBuffer,
  name: string,
  size: string
}

@Component({
  selector: 'app-get-user-image',
  templateUrl: './get-user-image.component.html',
  styleUrls: ['./get-user-image.component.scss']
})
export class GetUserImageComponent implements OnInit {

  @Output() imageSourceEvent = new EventEmitter<ImageData[]>();
  public imageSources: ImageData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  uploadEvent(event) {
    const files = Array.from(event.target.files);
    if (files == undefined){
      return;
    }
    this.imageSources = [];
    files.forEach(file => {
      // @ts-ignore
      if (!file.type.match('image')){
        return;
      }
      const reader = new FileReader();
      reader.onload = ev => {
        const src = ev.target.result;
        // @ts-ignore
        let result = {src, name: file.name, size: GetUserImageComponent.bytesToSize(file.size)};
        // @ts-ignore
        this.imageSources.push(result);
        this.imageSourceEvent.emit(this.imageSources)
      }
      reader.readAsDataURL(<Blob>file)
    })
  }

  private static bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (!bytes) return '0 Byte';
    // @ts-ignore
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  }

  removeEvent(name) {
    // @ts-ignore
    this.imageSources = this.imageSources.filter(file => file.name !== name)
  }

}
