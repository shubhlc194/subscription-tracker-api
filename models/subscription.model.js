import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },

    price: {
      type: Number,
      required: [true, "Subscription price is required"],
      min: [0, "Price must be greater than 0"],
    },

    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP", "INR"],
      default: "USD",
    },

    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"],
      required: true,
    },

    category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "lifestyle",
        "technology",
        "finance",
        "politics",
        "other",
      ],
      required: true,
      trim: true,
    },

    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },

    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value < new Date(),
        message: "Start date must be in the past",
      },
    },

    renewalDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "Renewal date must be after start date",
      },
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },

  { timestamps: true }
);

// ---------------------------------------------
// AUTO-CALCULATE RENEWAL DATE (exact screenshot logic)
// ---------------------------------------------
subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    const daysToAdd = renewalPeriods[this.frequency];

    if (daysToAdd) {
      const nextDate = new Date(this.startDate);
      nextDate.setDate(nextDate.getDate() + daysToAdd);
      this.renewalDate = nextDate;
    }
  }

  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
