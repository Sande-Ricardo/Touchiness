import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-viewer',
  standalone: true,
  imports: [MarkdownModule, CommonModule],
  template: `
    <div class="container22">
      @if (srcUrl) {
        <markdown [src]="srcUrl"></markdown>
      } @else {
        <p>No se ha proporcionado una fuente de Markdown.</p>
      }
    </div>
  `,
  styleUrl: './markdown-viewer.component.css'
})
export class MarkdownViewerComponent {

  @Input() srcUrl: string | undefined;

}
