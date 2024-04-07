import { z } from 'zod';

const today = new Date();

const schema = z.object({
    startDate: z
		.date()
		.max(today)
        .nullable()
        .transform((date) => date ?? null),
	endDate: z
        .date()
		.max(today)
        .nullable()
        .transform((date) => date ?? null),
	transactionType: z
		.object({
			label: z.string(),
			value: z.string(),
		}).array(),
	transactionStatus: z
		.object({
			label: z.string(),
			value: z.string(),
		}).array(),
})

type TransactionDataFilters = z.infer<typeof schema>;

export { schema, type TransactionDataFilters, today }