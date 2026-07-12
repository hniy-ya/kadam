import Expense from "../models/Expense.js";

export async function createExpense(req, res) {
    try {
        const expense = await Expense.create({
            groupId: req.params.groupId,

            title: req.body.title,

            amount: req.body.amount,

            paidBy: req.body.paidBy,

            participants: req.body.participants,

            splitType: req.body.splitType,

            expenseType: req.body.expenseType,

            createdBy: req.user._id,
        });

        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

export async function getExpenses(req, res) {
    try {
        const expenses = await Expense.find({
            groupId: req.params.groupId,
        }).populate("paidBy", "username profilePic");

        res.json(expenses);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

export async function getExpense(req, res) {
    try {
        const expense = await Expense.findById(req.params.expenseId).populate("paidBy", "username");

        if (!expense) {
            return res.status(404).json({
                error: "Expense not found",
            });
        }

        res.json(expense);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

export async function updateExpense(req, res) {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.expenseId, req.body, {
            new: true,
        });

        res.json(expense);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

export async function deleteExpense(req, res) {
    try {
        await Expense.findByIdAndDelete(req.params.expenseId);

        res.json({
            message: "Expense deleted",
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

export async function groupBalances(req, res) {
    try {
        const expenses = await Expense.find({
            groupId: req.params.groupId,
        });

        const balances = {};

        expenses.forEach((exp) => {
            const paidBy = exp.paidBy.toString();

            if (!balances[paidBy]) {
                balances[paidBy] = 0;
            }

            balances[paidBy] += exp.amount;

            exp.participants.forEach((p) => {
                const id = p.userId.toString();

                if (!balances[id]) {
                    balances[id] = 0;
                }

                balances[id] -= p.share;
            });
        });

        res.json(balances);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

export async function memberLedger(req, res) {
    try {
        const userId = req.user._id;

        const memberId = req.params.memberId;

        const expenses = await Expense.find({
            groupId: req.params.groupId,

            participants: {
                $elemMatch: {
                    userId: memberId,
                },
            },
        });

        res.json(expenses);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}
