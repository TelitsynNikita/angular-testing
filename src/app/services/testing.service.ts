import {Injectable} from "@angular/core";
import {FirstDependencyService} from "./first-dependency.service";

@Injectable()
export class TestingService {
  private firstDependencyService: FirstDependencyService

  constructor(firstDependencyService: FirstDependencyService) {
    this.firstDependencyService = firstDependencyService
  }

  getValue(index: number): string {
    return this.firstDependencyService.returnValue(index)
  }
}
