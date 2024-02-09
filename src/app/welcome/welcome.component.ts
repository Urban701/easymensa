import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  unserSchulEssen : string = 
  'Unser Hauptaugenmerk liegt auf Speisen wie aus Mamas Küche ohne jegliche Geschmacksverstärker. Es gibt täglich 2 Hauptspeisen zur Auswahl, wovon immer eines entweder für Vegetarier oder für muslimische Kinder zur Verfügung steht. Schweinefleischspeisen werden auf dem Menüplan extra mit einem S versehen.';

  unsereGeschichte : string =
  'Am 14. August 1915 wurde das Cafe Wild von meiner Urgroßmutter auf der Linken Wienzeile 60 vis a vis des damaligen Gemüsegroßmarktes eröffnet. Als anerkanntes Marktkaffee übernahm ich den Betrieb 1998 als 4. Generation. Nach ein paar Umstrukturierungen begannen wir 2000 mit der Ausstattung von Caterings für Firmenveranstaltungen wie Canon Österreich, Ikea, Olympus, etc. Im März 2005 begannen wir uns ebenso auf den Schulessensbereich zu konzentrieren, indem wir die Betreuung des Bundesgymnasiums in der Anton-Kriegergasse in Wien 23 übernahmen. Durch positives Feedback der Tagesschulheimleitung wurden wir an die Gymnasien Parhamer Platz, Anton-Baumgartnerstraße, Linzer Straße, Astgasse und die Karajangasse weitervermittelt.'
}
