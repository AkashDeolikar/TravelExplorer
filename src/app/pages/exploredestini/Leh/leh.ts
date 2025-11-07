import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leh',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leh.html',
  styleUrls: ['../city-style.css']
})
export class LehComponent {
  city = {
    name: 'Leh',
    state: 'Ladakh',
    heroImage: 'https://images.unsplash.com/photo-1566323124508-c708b5524d61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tagline: 'The rooftop of India — where silence speaks through the mountains.',
    description: `
      <strong>Leh</strong>, the crown jewel of Ladakh, rests amid the world’s mightiest mountain ranges — 
      the Himalayas and the Karakoram. This high-altitude town at over 11,000 ft exudes a spiritual aura, 
      where ancient monasteries, sapphire lakes, and prayer flags dance in the mountain wind.
      <br><br>
      Once an important stop on the Silk Route, Leh today attracts travelers seeking tranquility, 
      adventure, and cultural immersion. Every vista — from <em>Pangong Tso</em> to <em>Thiksey Monastery</em> — 
      feels like a glimpse of heaven.
    `,
    attractions: [
      {
        name: 'Pangong Tso Lake',
        image: 'https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'A mesmerizing high-altitude lake that changes color with the sky — a sight beyond imagination.',
        link: 'https://en.wikipedia.org/wiki/Pangong_Tso'
      },
      {
        name: 'Thiksey Monastery',
        image: 'https://images.unsplash.com/photo-1708945124506-e1b2baeb2dd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=720',
        desc: 'A 12-story monastery resembling Potala Palace — home to a grand Maitreya Buddha statue and peaceful chants.',
        link: 'https://en.wikipedia.org/wiki/Thikse_Monastery'
      },
      {
        name: 'Magnetic Hill',
        image: 'https://images.unsplash.com/photo-1641319626759-cc9ea5b18107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
        desc: 'A gravity-defying wonder — vehicles appear to move uphill against natural laws.',
        link: 'https://en.wikipedia.org/wiki/Magnetic_Hill_(India)'
      },
      {
        name: 'Shanti Stupa',
        image: 'https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        desc: 'Built by Japanese monks, it offers panoramic views of Leh under changing mountain light.',
        link: 'https://en.wikipedia.org/wiki/Shanti_Stupa,_Leh'
      },
      {
        name: 'Leh Palace',
        image: 'https://images.unsplash.com/photo-1695954591222-b8645dee4caf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
        desc: 'A 17th-century royal palace overlooking the town, echoing the heritage of the Namgyal dynasty.',
        link: 'https://en.wikipedia.org/wiki/Leh_Palace'
      }
    ],
    travelTips: [
      '🗓️ Best time: May to September — clear skies and open mountain passes.',
      '⚠️ Acclimatize for 1-2 days before high-altitude excursions.',
      '🏍️ Perfect for biking, trekking, and stargazing under crystal skies.',
      '🍲 Must-try: Thukpa, Momos, Butter Tea, and Yak Cheese.',
      '🙏 Respect local monasteries — photography may be restricted inside prayer halls.'
    ]
  };
}
