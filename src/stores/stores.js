import {atom} from 'jotai'

export const loggedInUser = atom({
    fullName: 'Hamid Mohamadi',
    email: "mohamadihamit@gmail.com"
})
export const initialCount = atom(0)
export const defaultCountry = atom('Iran')