import { NextResponse } from "next/server";
import { products_storage } from "@/storage/products";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const indexOfProduct = products_storage.findIndex((item) => item.id === parseInt(params.id));
    if (indexOfProduct === -1) {
        return NextResponse.json({ message: "Produto não encontrado!" }, { status: 404 });
    }
    products_storage.splice(indexOfProduct, 1);
    return NextResponse.json({ message: "Produto excluido com sucesso!" }, { status: 200 });
}