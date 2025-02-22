import { Industry } from '../value-objects/industry.enum';
import { Segment } from '../value-objects/segment.enum';

export class Company {
  private readonly _id: string;
  private _tradingName: string;
  private _legalName: string;
  private _taxId: string;
  private _email: string;
  private _phone?: string;
  private _industry: Industry;
  private _segment: Segment;
  private _isActive: boolean;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    tradingName: string,
    legalName: string,
    taxId: string,
    email: string,
    industry: Industry,
    segment: Segment,
    phone?: string,
    isActive: boolean = true,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this._id = id;
    this._tradingName = tradingName;
    this._legalName = legalName;
    this._taxId = taxId;
    this._email = email;
    this._industry = industry;
    this._segment = segment;
    this._phone = phone;
    this._isActive = isActive;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;

    this.validate();
  }

  private validate() {
    if (!this._tradingName) throw new Error('Trading name is required');
    if (!this._legalName) throw new Error('Legal name is required');
    if (!this._taxId) throw new Error('Tax ID is required');
    if (!this._email) throw new Error('Email is required');
    if (!Object.values(Industry).includes(this._industry)) {
      throw new Error(`Invalid industry value: ${this._industry}`);
    }
    if (!Object.values(Segment).includes(this._segment)) {
      throw new Error(`Invalid segment value: ${this._segment}`);
    }
  }

  get id(): string {
    return this._id;
  }

  get industry(): Industry {
    return this._industry;
  }

  get segment(): Segment {
    return this._segment;
  }

  set industry(industry: Industry) {
    if (!Object.values(Industry).includes(industry)) {
      throw new Error(`Invalid industry value: ${industry}`);
    }
    this._industry = industry;
  }
  set segment(segment: Segment) {
    if (!Object.values(Segment).includes(segment)) {
      throw new Error(`Invalid segment value: ${segment}`);
    }
    this._segment = segment;
  }
}
