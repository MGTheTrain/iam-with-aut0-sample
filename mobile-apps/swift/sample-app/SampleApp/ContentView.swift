//
//  ContentView.swift
//  sample-app
//
//  Created by Marvin Gajek on 05.02.24.
//

import SwiftUI
import Auth0

struct ContentView: View {
    var body: some View {
        VStack {
            Button("Login", action: self.login)
        }
        .padding()
    }
}

extension ContentView {
    func login() {
        Auth0.webAuth().audience("https://quickstart/api").start() {
            result in switch result {
                case .success(let credentials):
                    print("Obtained access token: \(credentials.accessToken)")
                case .failure(let error):
                    print("Failed with: \(error)")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
