import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit registration form with valid data', () => {
    component.registrationForm.setValue({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    });

    const mockResponse = {};
    const expectedUrl = 'http://localhost:8080/api/users/register';
    component.onSubmit();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('POST');

    req.flush(mockResponse);

    expect(component.registrationSuccess).toBe(true);
  });

  it('should not submit registration form with invalid data', () => {
    component.registrationForm.setValue({
      name: '',
      email: 'invalidemail',
      password: 'password123',
      confirmPassword: 'password456',
    });

    const expectedUrl = 'http://localhost:8080/api/users/register';
    component.onSubmit();

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('POST');

    req.error(new ErrorEvent('Validation error'), { status: 400 });

    expect(component.registrationSuccess).toBe(false);
  });
});
