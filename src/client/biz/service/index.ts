/**
 * Created by mayajuni on 2016-08-08.
 */
import { HomeService } from './home.service';
import { VocaMobileService } from './vocamobile.service';

export const APP_SERVICE_PROVIDERS = [
  HomeService,
  VocaMobileService
];

export * from './home.service';
export * from './vocamobile.service';
