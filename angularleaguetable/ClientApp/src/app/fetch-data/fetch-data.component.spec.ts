import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { FetchDataComponent } from './fetch-data.component';

describe('FetchDataComponent', () => {
  it('should assign forecasts when request succeeds', () => {
    const mockForecasts = [
      {
        date: '2026-04-22',
        temperatureC: 10,
        temperatureF: 50,
        summary: 'Cool'
      }
    ];
    const httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(mockForecasts));

    const component = new FetchDataComponent(httpClientSpy, '/');

    expect(httpClientSpy.get).toHaveBeenCalledWith('/weatherforecast');
    expect(component.forecasts).toEqual(mockForecasts);
  });

  it('should log error and keep forecasts undefined when request fails', () => {
    const httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    const requestError = new Error('Request failed');
    httpClientSpy.get.and.returnValue(throwError(requestError));
    spyOn(console, 'error');

    const component = new FetchDataComponent(httpClientSpy, '/');

    expect(httpClientSpy.get).toHaveBeenCalledWith('/weatherforecast');
    expect(console.error).toHaveBeenCalledWith(requestError);
    expect(component.forecasts).toBeUndefined();
  });
});
