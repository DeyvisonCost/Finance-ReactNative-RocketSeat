interface CategoryProps {
    name: string;
    icon: string;
}

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
}


export interface Props {
    data: TransactionCardProps;
}

export interface TransactionTypeProps {
    type: 'positive' | 'negative'
}