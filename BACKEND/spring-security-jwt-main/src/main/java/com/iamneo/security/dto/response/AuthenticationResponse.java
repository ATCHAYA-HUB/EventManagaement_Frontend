package com.iamneo.security.dto.response;

import com.iamneo.security.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
	private Long id;
    private String token;
    private Role role;
}
