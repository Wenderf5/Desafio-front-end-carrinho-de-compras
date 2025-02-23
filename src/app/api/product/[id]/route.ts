import { NextResponse } from "next/server";
import { productStorage } from "@/storage/productStorage";

export async function DELETE(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    const indexOfProduct = productStorage.findIndex((item) => item.id === id);
    if (indexOfProduct === -1) {
        return NextResponse.json({ message: "Produto não encontrado!" }, { status: 404 });
    }
    productStorage.splice(indexOfProduct, 1);
    return NextResponse.json({ message: "Produto excluido com sucesso!" }, { status: 200 });
}

export async function PATCH(request: Request, context: { params: { id: string } }) {
    const { id } = context.params;
    const body = await request.json();
    try {
        const productIndex = productStorage.findIndex((item) => item.id === id);
        if (productIndex === -1) {
            return NextResponse.json({ message: "Produto não encontrado!" }, { status: 404 });
        }
        productStorage[productIndex].quantity = body.newQuantity;
        productStorage[productIndex].total = body.newQuantity * productStorage[productIndex].price;
        return NextResponse.json({ message: "Produto atualizado com sucesso!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Erro ao atualizar o produto!" }, { status: 500 });
    }
}