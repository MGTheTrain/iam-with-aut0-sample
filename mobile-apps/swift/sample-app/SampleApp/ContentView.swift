//
//  ContentView.swift
//  sample-app
//
//  Created by Marvin Gajek on 05.02.24.
//

import SwiftUI
import Auth0

struct ContentView: View {
    @StateObject private var authHandler = AuthHandler()
    var body: some View {
        if authHandler.isUserLoggedIn() {
            VStack {
                Button("Logout", action: self.logout)
            }
            .padding()
        }
        else {
            VStack {
                Button("Login", action: self.login)
            }
            .padding()
        }
    }
}

extension ContentView {
    func login() {
        self.authHandler.login()
    }
    
    func logout() {
        self.authHandler.logout()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
