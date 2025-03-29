import { faker } from '@faker-js/faker';

import { UserProps } from '@/users/domain/entities/user.entity';

export function userDataProps(props?: Partial<UserProps>): UserProps {
	return {
		name: faker.person.fullName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		...props,
	};
}
