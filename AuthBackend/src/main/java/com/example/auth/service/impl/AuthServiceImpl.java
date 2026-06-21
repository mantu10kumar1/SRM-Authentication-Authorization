package com.example.auth.service.impl;

import com.example.auth.config.JwtUtils;
import com.example.auth.dto.*;
import com.example.auth.model.*;
import com.example.auth.repository.UserRepository;
import com.example.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public String registerUser(SignupRequest signupRequest) {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            throw new RuntimeException("Error: Username is already taken!");
        }
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new RuntimeException("Error: Email is already in use!");
        }

        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        // Assign Role
        if ("ADMIN".equalsIgnoreCase(signupRequest.getRole())) {
            user.setRole(Role.ROLE_ADMIN);
        } else {
            user.setRole(Role.ROLE_USER);
        }

        userRepository.save(user);
        return "User registered successfully!";
    }

    @Override
    public AuthResponse loginUser(LoginRequest loginRequest) {
        // 🔴 LOGINREQUEST SE USERNAME (JO KI AB EMAIL HAI) UTHAO AUR findByEmail ME PASSO KARO
        User user = userRepository.findByEmail(loginRequest.getUsername())
                .orElseThrow(() -> new RuntimeException("Error: User not found with this email!"));

        // Password check karo
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            throw new RuntimeException("Error: Invalid credentials!");
        }

        // Token generate karo email ke sath
        String token = jwtUtils.generateToken(user.getEmail(), user.getRole().name());
        return new AuthResponse(token, user.getUsername(), user.getRole().name());
    }
}