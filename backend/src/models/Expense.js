import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
{
  groupId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Group",
    required:true
  },

  title:{
    type:String,
    required:true
  },

  description:String,

  amount:{
    type:Number,
    required:true
  },

  paidBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  splitType:{
    type:String,
    enum:[
      "equal",
      "custom"
    ],
    default:"equal"
  },

  participants:[
    {
      userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
      },

      share:Number
    }
  ],

  expenseType:{
    type:String,
    enum:[
      "normal",
      "event",
      "grocery"
    ],
    default:"normal"
  },

  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }

},{
 timestamps:true
});

const Expense = mongoose.model("Expense",ExpenseSchema);
export default Expense;
