import { faker } from '@faker-js/faker';

import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';

describe('UserEntity', () => {
	let props: UserProps;
	let sut: UserEntity;

	beforeEach(() => {
		props = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		sut = new UserEntity(props);
	});

	it('should be defined and have the correct props', () => {
		expect(sut).toBeDefined();
		expect(sut).toBeInstanceOf(UserEntity);
		expect(
			Object.entries(props).map(([key, value]) => {
				expect(sut.props[key]).toEqual(value);
			}),
		);
		expect(sut.props.createdAt).toBeInstanceOf(Date);
	});
});
