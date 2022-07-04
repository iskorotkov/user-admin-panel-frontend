import { NewUserGenderEnum } from '../models/new-user'

export const genders = [
  { value: NewUserGenderEnum.Male, label: 'Male' },
  { value: NewUserGenderEnum.Female, label: 'Female' },
  { value: NewUserGenderEnum.Other, label: 'Other' },
  { value: NewUserGenderEnum.Unspecified, label: 'Unspecified' },
]

export const defaultGender = NewUserGenderEnum.Unspecified
