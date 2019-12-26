export class Output<T> {
    status: 'success';
    output?: T;
}

export class ApiInputAlert {
    id: string
    organizationCode: string
    organizationName: string
    equipmentName: string
    equipmentPlaceNumber: string
    serialNumber: string
    statusText: string
    conditionText: string
}

export class ApiInputNotice {
    title: string
    source: string
    content: string
    serialNumber: string
    organizationCode: string
    organizationName: string
    equipmentName: string
}
