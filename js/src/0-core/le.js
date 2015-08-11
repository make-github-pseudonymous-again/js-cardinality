
const le = function ( n , iterable ) {

	if ( n < 0 ) return false ;

	if ( iterable.length !== undefined ) return iterable.length <= n ;

	if ( iterable.size !== undefined ) return iterable.size <= n ;

	const it = iterable[Symbol.iterator]( ) ;

	for ( ; n > 0 ; --n ) if ( it.next( ).done ) return true ;

	return it.next( ).done ;

} ;

exports.le = le ;
