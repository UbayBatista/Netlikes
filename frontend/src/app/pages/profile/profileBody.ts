import { Component, OnInit, Input, ChangeDetectorRef,ViewChild, ElementRef } from "@angular/core";
import {ProfileBody} from "../../components/profileComponents/profileComponents";
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { ActivatedRoute } from '@angular/router'; 
import { Film } from "../../components/film/film";

@Component({
    selector:"app-profile-complete",
    standalone: true,
    imports: [ProfileBody, ProfileHeader, Film],
    templateUrl: "./profileBody.html",
    styleUrl: "./profile-body.css"
})
export class ProfileComplete implements OnInit{
    profileName = ''; 
    textBio = '';
    itsMe = false;
    isEditing = false;
    
    constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        
        this.route.params.subscribe(params => {
            this.profileName = params['username']; 
            
            if (this.profileName === 'Messi') {
                this.textBio = 'Hola soy Messi, el 10.';
                this.itsMe = false;
            } else if (this.profileName === 'Cristiano Ronaldo') {
                this.textBio = 'Hola soy el Bicho Oficial, Siuuuu.';
                this.itsMe = true;
            } else {
                this.textBio = 'Biografía por defecto...';
                this.itsMe = false;
            }
        });
    }

    @Input() filmsView: any[] = [
        { title: 'Avengers: Endgame', image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
        { title: 'Avengers: Infinity War', image: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
        { title: 'The Avengers', image: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg' },
        { title: 'Captain America: Civil War', image: 'https://image.tmdb.org/t/p/w500/5N20rQURev5CNDcMjHVUZhpoCNC.jpg' },
        { title: 'Deadpool 2', image: 'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg' },
        { title: 'Shazam!', image: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg' },
        { title: 'Star Wars: The Force Awakens', image: 'https://image.tmdb.org/t/p/w500/fYzpM9GmpBlIC893fNjoWCwE24H.jpg' },
        { title: 'Minions', image: 'https://image.tmdb.org/t/p/w500/s5uMY8ooGRZOL0oe4sIvnlTsYQO.jpg' },
        { title: 'Spectre (007)', image: 'https://image.tmdb.org/t/p/w500/mSvpKOWbyFtLro9BjfEGqUw5dXE.jpg' },
        { title: 'Fight Club', image: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' }
    ];

    @Input() filmsLater: any[] = [
        { title: 'Interstellar', image: 'https://image.tmdb.org/t/p/w500/gEU2QvYBfw7fg7vgoYbxNSR76sR.jpg' },
        { title: 'Inception', image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg' },
        { title: 'The Matrix', image: 'https://image.tmdb.org/t/p/w500/f89U3Y9L9UnpgH3p9Szu9YQG2fv.jpg' },
        { title: 'The Dark Knight', image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
        { title: 'Avatar', image: 'https://image.tmdb.org/t/p/w500/kyeqWdyKINLSYWZWTcgmAgleExn.jpg' },
        { title: 'Star Wars: A New Hope', image: 'https://image.tmdb.org/t/p/w500/6FfCtvVAxD9pm97N10o9Szu9YQG.jpg' },
        { title: 'Star Wars: The Force Awakens', image: 'https://image.tmdb.org/t/p/w500/fYzpM9GmpBlIC893fNjoWCwE24H.jpg' },
        { title: 'Venom', image: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg' },
        { title: 'Mad Max: Fury Road', image: 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg' },
        { title: 'The Martian', image: 'https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg' }
    ];

    @Input() filmsViewOther: any[] = [
        { title: 'The Godfather', image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
        { title: 'The Shawshank Redemption', image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
        { title: 'Fight Club', image: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
        { title: 'Forrest Gump', image: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
        { title: 'Titanic', image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
        { title: 'Joker', image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
        { title: 'Parasite', image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
        { title: 'Pulp Fiction', image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPbOYKQru1U.jpg' },
        { title: 'Gladiator', image: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvq6.jpg' },
        { title: 'The Lord of the Rings', image: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' }
    ];

    @Input() filmsLaterOther: any[] = [
        { title: 'Toy Story', image: 'https://image.tmdb.org/t/p/w500/rhIRbceoE9lR4veEXuwCC2wARtG.jpg' },
        { title: 'Spirited Away', image: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkPcrvz2m.jpg' },
        { title: 'Spider-Man: Into the Spider-Verse', image: 'https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg' },
        { title: 'Coco', image: 'https://image.tmdb.org/t/p/w500/gGEsBPAijhVMRkvq5K11bAIn2X2.jpg' },
        { title: 'Up', image: 'https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg' },
        { title: 'Inside Out', image: 'https://image.tmdb.org/t/p/w500/lRHE0vzf30Cv10fAexP0OQkRwwZ.jpg' },
        { title: 'Wall-E', image: 'https://image.tmdb.org/t/p/w500/hbhFnRcwDkX1cT124T0rN5V6kF6.jpg' },
        { title: 'The Lion King', image: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLreANYu.jpg' },
        { title: 'Shrek', image: 'https://image.tmdb.org/t/p/w500/iB64vpL3dIObYkFEkxcYQcpK5I3.jpg' },
        { title: 'Minions', image: 'https://image.tmdb.org/t/p/w500/s5uMY8ooGRZOL0oe4sIvnlTsYQO.jpg' },
        { title: 'Avengers: Endgame', image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
        { title: 'Avengers: Infinity War', image: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
        { title: 'The Avengers', image: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg' },
        { title: 'Captain America: Civil War', image: 'https://image.tmdb.org/t/p/w500/5N20rQURev5CNDcMjHVUZhpoCNC.jpg' },
        { title: 'Deadpool 2', image: 'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg' },
        { title: 'Shazam!', image: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg' },
        { title: 'Star Wars: The Force Awakens', image: 'https://image.tmdb.org/t/p/w500/fYzpM9GmpBlIC893fNjoWCwE24H.jpg' },
        { title: 'Minions', image: 'https://image.tmdb.org/t/p/w500/s5uMY8ooGRZOL0oe4sIvnlTsYQO.jpg' },
        { title: 'Spectre (007)', image: 'https://image.tmdb.org/t/p/w500/mSvpKOWbyFtLro9BjfEGqUw5dXE.jpg' },
        { title: 'Fight Club', image: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
        { title: 'Avengers: Endgame', image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
        { title: 'Avengers: Infinity War', image: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
        { title: 'The Avengers', image: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg' },
        { title: 'Captain America: Civil War', image: 'https://image.tmdb.org/t/p/w500/5N20rQURev5CNDcMjHVUZhpoCNC.jpg' },
        { title: 'Deadpool 2', image: 'https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg' },
        { title: 'Shazam!', image: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg' },
        { title: 'Star Wars: The Force Awakens', image: 'https://image.tmdb.org/t/p/w500/fYzpM9GmpBlIC893fNjoWCwE24H.jpg' },
        { title: 'Minions', image: 'https://image.tmdb.org/t/p/w500/s5uMY8ooGRZOL0oe4sIvnlTsYQO.jpg' },
        { title: 'Spectre (007)', image: 'https://image.tmdb.org/t/p/w500/mSvpKOWbyFtLro9BjfEGqUw5dXE.jpg' },
        { title: 'Fight Club', image: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' }
    ];

    canScrollLeft = false;
    canScrollRight = true;


    @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

    scrollLeft() {
        const el = this.scrollContainer.nativeElement;

        el.scrollBy({
            left: -300,
            behavior: 'smooth'
        });

    setTimeout(() => this.updateScrollButtons(), 300);
    }

    scrollRight() {
        const el = this.scrollContainer.nativeElement;

        el.scrollBy({
        left: 300,
        behavior: 'smooth'
        });

        setTimeout(() => this.updateScrollButtons(), 300);
    }

    updateScrollButtons() {
        const el = this.scrollContainer.nativeElement;

        this.canScrollLeft = el.scrollLeft > 0;
        this.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;

        this.cdr.detectChanges();
    }

    ngAfterViewInit() {
        const el = this.scrollContainer.nativeElement;

        this.updateScrollButtons();

        el.addEventListener('scroll', () => this.updateScrollButtons(), { passive: true });
        el.addEventListener('wheel', () => this.updateScrollButtons(), { passive: true });
        el.addEventListener('touchmove', () => this.updateScrollButtons(), { passive: true });
    }

    Edit(){
        this.isEditing = !this.isEditing;
    }


}