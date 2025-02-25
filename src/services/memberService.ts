import * as repo from "../repositories/memberRepository";

export function getAllMembers() {
    return repo.getAllMembers();
}

export function getMemberById(id: number) {
    return repo.getMemberById(id);
}

export function getMemberByName(name: string) {
    return repo.getMemberByName(name);
}