package com.clarim.api.config;

import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfiguracaoStripe {
    @Value("${stripe.secret-key}")
    private String secretKey;

    @PostConstruct
    public void configurar() {
        if(secretKey == null || secretKey.isEmpty()) {
            throw new IllegalStateException("A chave secreta do Stripe não foi configurada.");
        }

        Stripe.apiKey = secretKey;
    }
}
