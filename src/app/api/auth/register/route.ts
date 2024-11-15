import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/utils/hashPassword";

export async function POST(request: Request) {
	try {
		console.log("Received POST request at registration endpoint");

		const { email, password, name } = await request.json();
		console.log("Parsed request JSON:", { email, name });

		// Check if the user already exists
		const existingUser = await prisma.user.findUnique({ where: { email } });
		console.log("Checked existing user:", existingUser ? "User exists" : "User does not exist");

		if (existingUser) {
		console.warn("User already exists with email:", email);
			return NextResponse.json({ error: "User already exists" }, { status: 400 });
		}

		// Hash password and create a new user
		console.log("Hashing password...");
		const hashedPassword = hashPassword(password);
		console.log("Password hashed successfully");

		console.log("Creating new user in the database...");
		const user = await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
				name,
			},
		});
		console.log("User created successfully with ID:", user.id);

		return NextResponse.json({
			user: { id: user.id, email: user.email, name: user.name },
		});

	} catch (error) {
		console.error("Error occurred during registration:", error);
		return NextResponse.json(
			{ error: "An error occurred while processing your request." },
			{ status: 500 }
		);
	}
}
