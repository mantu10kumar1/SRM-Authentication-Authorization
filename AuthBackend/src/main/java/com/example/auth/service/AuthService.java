package com.example.auth.service;

import com.example.auth.dto.*;

public interface AuthService {
    String registerUser(SignupRequest signupRequest);
    AuthResponse loginUser(LoginRequest loginRequest);
}