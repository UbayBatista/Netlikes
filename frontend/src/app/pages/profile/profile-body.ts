import { Component, OnInit, Input, ChangeDetectorRef,ViewChild, ElementRef } from "@angular/core";
import {ProfileBody} from "../../components/profile-components/profile-components";
import { ProfileHeader } from "../../components/profile-header/profile-header";
import { ActivatedRoute } from '@angular/router'; 
import { Film } from "../../components/film/film";
import { SocialModal } from "../../components/social-modal/social-modal";
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { MyProfile, UserProfile, User } from '../../models/user.models';
import { AsyncPipe } from '@angular/common';
import { Router } from "@angular/router";
import { ProfileService } from "../../services/profile.service";

@Component({
    selector:"app-profile-complete",
    standalone: true,
    imports: [ProfileBody, ProfileHeader, Film, SocialModal, AsyncPipe],
    templateUrl: "./profile-body.html",
    styleUrl: "./profile-body.css"
})
export class ProfileComplete implements OnInit{
    profile$: Observable<MyProfile | UserProfile | null>;
    itsMe$: Observable<boolean>;
    isEditing = false;
    isSocialModalOpen = false;
    socialType: 'Seguidores' | 'Seguidos' = 'Seguidores';
    socialData: any[] = [];
    
    constructor(private route: ActivatedRoute, 
        private router: Router, 
        private cdr: ChangeDetectorRef, 
        private authService: AuthService, 
        private profileService: ProfileService
    ) {
        this.profile$ = this.profileService.getProfile();
        this.itsMe$ = this.profileService.isMyProfile();
    }

    ngOnInit() {
        
        this.route.params.subscribe(params => {
            this.profileService.loadProfile(params['username']);
        });
    }
    
    showSocial(type: 'Seguidores' | 'Seguidos') {
        this.socialType = type;
        this.isSocialModalOpen = true;

        if (type === 'Seguidores') {
            this.socialData = [
                { name: 'Luis Suárez', avatar: 'https://elasticbeanstalk-us-east-1-911267631614.s3.amazonaws.com/imagenes/jugadores/SUAREZ%20LUIS%20(2).jpg', status: 'Seguir también' },
                { name: 'Benzema', avatar: 'https://revsportz.in/wp-content/uploads/2023/06/Benzema.jpeg', status: 'Pendiente' },
                { name: 'La Roca', avatar: 'https://wallpaperaccess.com/full/1264961.jpg', status: 'Seguir también' },
                { name: 'Cristiano Ronaldo', avatar: 'https://i.pinimg.com/736x/f6/28/85/f628856f2e45836d5850d959a1ed5c75.jpg', status: '' },
                { name: 'Messi', avatar: 'https://cdn2.telediario.mx/uploads/media/2022/12/18/lionel-messi-besa-copa-recibir.jpg', status: 'Seguir también' },
                { name: 'Zinedine Zidane', avatar: 'https://assets.realmadrid.com/is/image/realmadrid/1330186270595?$Mobile$&fit=wrap&wid=312', status: '' },
                { name: 'Kylian Mbappé', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Picture_with_Mbapp%C3%A9_%28cropped%29_%28cropped%29.jpg/250px-Picture_with_Mbapp%C3%A9_%28cropped%29_%28cropped%29.jpg', status: 'Pendiente' },
                { name: 'Andrés Iniesta', avatar: 'https://imageio.forbes.com/specials-images/imageserve/5ecead3f0ca011000726427e/0x0.jpg?format=jpg&crop=1669,1671,x0,y79,safe&height=416&width=416&fit=bounds', status: 'Seguir también' },
                { name: 'Xavi Hernández', avatar: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/949_xavi.jpg', status: '' },
                { name: 'Carles Puyol', avatar: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/704_puyol.jpg', status: 'Seguir también' }
            ];
        } else {
            this.socialData = [
                { name: 'Cristiano Ronaldo', avatar: 'https://i.pinimg.com/736x/f6/28/85/f628856f2e45836d5850d959a1ed5c75.jpg'},
                { name: 'Zinedine Zidane', avatar: 'https://assets.realmadrid.com/is/image/realmadrid/1330186270595?$Mobile$&fit=wrap&wid=312'},
                { name: 'Xavi Hernández', avatar: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/949_xavi.jpg'},
                { name: 'Luka Modric', avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Ofrenda_de_la_Liga_y_la_Champions-57-L.Mill%C3%A1n_%2852109310843%29_%28Luka_Modri%C4%87%29.jpg' },
                { name: 'Toni Kroos', avatar: 'https://s.hs-data.com/gfx/person/l/3198.jpg?fallback=male' },
                { name: 'Vinícius Jr', avatar: 'https://cdn.britannica.com/45/273345-050-7B263FB8/Vinicius-Junior-Real-Madrid-football-soccer-player-UEFA-league-knockout--play-off-against-Manchester-City-2024-25.jpg' },
                { name: 'Erling Haaland', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Erling_Haaland_June_2025.jpg' },
                { name: 'Kevin De Bruyne', avatar: 'https://img.a.transfermarkt.technology/portrait/big/88755-1713391485.jpg?lm=1' },
                { name: 'Robert Lewandowski', avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/26/2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg' }
            ];
        }
    }
    
    canScrollLeft = false;
    canScrollRight = true;

    private _scrollContainer!: ElementRef;

    @ViewChild('scrollContainer') set scrollContainer(el: ElementRef) {
        if (el) {
            this._scrollContainer = el;
            this.updateScrollButtons();
            el.nativeElement.addEventListener('scroll', 
                () => this.updateScrollButtons(), { passive: true });
            el.nativeElement.addEventListener('wheel', 
                () => this.updateScrollButtons(), { passive: true });
            el.nativeElement.addEventListener('touchmove', 
                () => this.updateScrollButtons(), { passive: true });
        }
    }

    scrollLeft() {
        this._scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
        setTimeout(() => this.updateScrollButtons(), 300);
    }

    scrollRight() {
        this._scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
        setTimeout(() => this.updateScrollButtons(), 300);
    }

    updateScrollButtons() {
        if (!this._scrollContainer) return;
        const el = this._scrollContainer.nativeElement;
        this.canScrollLeft = el.scrollLeft > 0;
        this.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;
        this.cdr.detectChanges();
    }

    Edit(){
        this.isEditing = !this.isEditing;
    }

    onPrivacyChange(isPrivate: boolean): void {
        this.profileService.updatePrivacy(isPrivate);
    }

    logout(){
        this.authService.logout();
        this.router.navigate(['/']);
    }

}