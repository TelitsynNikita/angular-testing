import {TestingService} from "../testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency.service";

describe('TestingService', () => {
  let service: TestingService
  let firstDependency: FirstDependencyService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    })

    service = TestBed.inject(TestingService)
    firstDependency = TestBed.inject(FirstDependencyService)
  })

  it('Should create service', () => {
    expect(service).toBeDefined()
  })

  it('Should return a value of array for index - original class', () => {
    const result = service.getValue(2)
    expect(result).toBe('three')
  })

  it('Should return a value of array for index - spyOn and callThought', () => {
    spyOn(firstDependency, 'returnValue').and.callThrough()
    const result = service.getValue(0)
    expect(result).toBe('one')
  })

  it('Should return a value of array for index and returnValue', () => {
    spyOn(firstDependency, 'returnValue').and.returnValue('two')
    const result = service.getValue(1)
    expect(result).toBe('two')
  })

  it('Should return a value of array for index and callFake', () => {
    spyOn(firstDependency, 'returnValue').and.callFake(() => 'two')
    const result = service.getValue(1)
    expect(result).toBe('two')
  })
})
