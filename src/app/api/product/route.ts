import { NextResponse } from "next/server";
import { productStorage } from "@/storage/productStorage";

export async function GET() {
    return NextResponse.json(productStorage, { status: 200 });
}

export async function POST(request: Request) {
    const body = await request.json();
    try {
        productStorage.push(body.product);
        return NextResponse.json({ message: "Produto adicionado com sucesso!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Erro ao adicionar o produto!" }, { status: 500 });
    }
}