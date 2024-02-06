//
//  AuthHandler.swift
//  sample-app
//
//  Created by Marvin Gajek on 06.02.24.
//

import Foundation

import Auth0

class AuthHandler: ObservableObject {
    @Published private var isLoggedIn: Bool = false

    func login() {
        Auth0.webAuth().audience("https://quickstart/api").start() { [weak self] result in
            switch result {
            case .success(let credentials):
                print("Obtained access token: \(credentials.accessToken)")
                self?.isLoggedIn = true
            case .failure(let error):
                print("Failed with: \(error)")
            }
        }
    }

    func logout() {
        Auth0.webAuth().clearSession() { [weak self] result in
            switch result {
            case .success:
                print("Logged out")
                self?.isLoggedIn = false
            case .failure(let error):
                print("Failed with: \(error)")
            }
        }
    }

    func isUserLoggedIn() -> Bool {
        return isLoggedIn
    }
}
