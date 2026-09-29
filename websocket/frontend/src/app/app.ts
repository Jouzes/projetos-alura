import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    this.socket.onmessage = (e) => {
      this.text.set(e.data)
    }

    this.socket.onopen = () => {
      this.conected.set(true);
    }

    this.socket.onclose = () => {
      this.conected.set(false);
    }
  }

  protected readonly title = signal('frontend');

  protected text = signal('');
  protected conected = signal(false);
  private socket = new WebSocket("ws://localhost:3000");

  protected sendText(event: Event) {
    const campo = event.target as HTMLTextAreaElement;
    this.text.set(campo.value);

    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(campo.value);
    }
  }
}
