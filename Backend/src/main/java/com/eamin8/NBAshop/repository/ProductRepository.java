package com.eamin8.NBAshop.repository;

import com.eamin8.NBAshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
