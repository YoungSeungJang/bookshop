const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, removeCartItem } = require('../controller/cartController');
router.use(express.json());

// 장바구니 담기
router.post('/', addToCart);

// 장바구니 조회 / 선택된 장바구니 목록 조회
router.get('/', getCartItems);

// 장바구니 도서 삭제
router.delete('/:id', removeCartItem);

module.exports = router;
