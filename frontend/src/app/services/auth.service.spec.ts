import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { User, RegisterData } from '../models/user.models';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/users';

  const mockUser: User = {
    name: 'Juan Perez',
    email: 'test@test.com',
    profilePicture: 'assets/img.png'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register', () => {
    it('debe enviar una petición POST y guardar el usuario en localStorage', () => {
      const registerData: RegisterData = {
        userName: 'Juan Perez',
        email: 'test@test.com',
        birthdate: '2000-01-01',
        password: 'password123',
        securityQuestion: '?',
        answer: '!',
        favoriteGenres: [{ id: 1, genre: 'Acción' }]
      };

      service.register(registerData).subscribe((user) => {
        expect(user).toEqual(mockUser);
        expect(localStorage.getItem('user')).toContain('test@test.com');
      });

      const req = httpMock.expectOne(`${apiUrl}/register`);
      expect(req.request.method).toBe('POST');
      req.flush(mockUser);
    });
  });

  describe('logout', () => {
    it('debe limpiar el localStorage y emitir null', () => {
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      service.logout();

      expect(localStorage.getItem('user')).toBeNull();
      
      service.getCurrentUser().subscribe(user => {
        expect(user).toBeNull();
      });
    });
  });

  describe('checkEmailExists', () => {
    it('debe devolver true si el email ya existe', () => {
      service.checkEmailExists('test@test.com').subscribe(exists => {
        expect(exists).toBe(true);
      });

      const req = httpMock.expectOne(`${apiUrl}/check-email?email=test@test.com`);
      req.flush(true);
    });
  });
});