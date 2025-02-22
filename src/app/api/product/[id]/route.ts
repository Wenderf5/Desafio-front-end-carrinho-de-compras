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