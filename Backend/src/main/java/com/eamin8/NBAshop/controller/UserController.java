package com.eamin8.NBAshop.controller;

import com.eamin8.NBAshop.model.User;
import com.eamin8.NBAshop.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.registerUser(user);
    }

    @GetMapping("/{username}")
    public Optional<User> getByUsername(@PathVariable String username) {
        return service.findByUsername(username);
    }

}
