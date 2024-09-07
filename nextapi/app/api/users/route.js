import { NextResponse } from "next/server";

const reqresInUser = "https://reqres.in/api/users";

export async function GET() {
    const response = await fetch(reqresInUser);
    return NextResponse.json(await response.json());
}

export async function POST(request) {
    const body =  await request.json();
    // make a POST request to reqres.in
    const response = await fetch(reqresInUser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    return NextResponse.json(await response.json(),{status: response.status});
}

export async function PUT(request) {
    const body =  await request.json();
    // make a PUT request to reqres.in
    const response = await fetch(reqresInUser, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    return NextResponse.json(await response.json(),{status: response.status});
}

export async function DELETE() {
    // make a DELETE request to reqres.in
    const response = await fetch(reqresInUser, {
        method: 'DELETE',
    });

    return NextResponse.json(await response.json(),{status: response.status});
}


