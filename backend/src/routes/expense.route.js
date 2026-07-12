import express from "express";
import { protectRoute } from "../middlewares/auth.middileware.js";
import { createExpense, deleteExpense, getExpense, getExpenses, groupBalances, memberLedger, updateExpense } from "../controllers/expense.controller.js";

const router = express.Router();

router.post("/:groupId/expenses", protectRoute, createExpense);

router.get("/:groupId/expenses", protectRoute, getExpenses);

router.get("/expenses/:expenseId", protectRoute, getExpense);

router.patch("/expenses/:expenseId", protectRoute, updateExpense);

router.delete("/expenses/:expenseId", protectRoute, deleteExpense
);

router.get("/:groupId/ledger/:memberId", protectRoute, memberLedger);

router.get("/:groupId/balance", protectRoute, groupBalances);

export default router;
