import { NextResponse } from "next/server";
import { products_storage } from "@/storage/products";

export async function GET() {
    return NextResponse.json(products_storage, { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();
    try {
        products_storage.push(body.product);
        return NextResponse.json({ message: "Produto adicionado com sucesso!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Erro ao adicionar o produto!" }, { status: 500 });
    }
}